import { Component, OnInit, Input, Output } from '@angular/core';
import { storage } from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from './../auth';
import { DatabaseService } from './../shared/services/database/database.service';
import { Image } from './../image'
import { UploadTask } from './upload-task.model'
import { Media } from './media.model'

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
    // The object database path
    @Input('database-path') databasePath: string;

    // The object data
    @Input() data: any;

    // Dialog Ref to be closed after success save
    @Input() dialogRef: any;

    @Input() save: Function;

    // Internal meta data
    private imageList : Observable<Image[]>;
    private storage: storage.Storage;
    private user: any;
    private media: Media[];
    
    // API

    // File references
    public files: any;
    public file_srcs: any[];
    public resizedFiles: any[];

    // Size before and after
    public debug_size_before: any[];
    public debug_size_after: any[];
    public totalUploaded: number = 0;

    // Controllers
    public seeSaved: boolean;

    constructor(
        private auth: AuthService,
    ){}


    ngOnInit() {
        this.user = this.auth.user.subscribe(user => {
            if(this.user){
                this.databasePath = this.databasePath + this.user.auth.uid;
            }
        });
        this.storage = storage();
        this.debug_size_before = [];
        this.debug_size_after = [];
        this.file_srcs = [];
        this.seeSaved = false;
        this.data = this.data ? this.data : {};
    }


    getTotalFilesSize(){
        let total = 0;
        if(this.resizedFiles){
            for(let i = 0; i < this.resizedFiles.length; i++) {
                total += this.resizedFiles[i].size;
            };
        }
        return total;
    }


    getSizeInMb(total = 0){
        return total / 1000000;
    }


    getProgress(){
        let total = this.getTotalFilesSize();
        return (100 / total ) * this.totalUploaded;
    }


    updateFilesToLoad(){
        this.files = (<HTMLInputElement>document.getElementById('files')).files;
        this.resizedFiles = [];
        this.readFiles(this.files, 0);
    }


    upload = () => {
        this.media = new Array<Media>();
        // Files selected. Input
        if(this.files){
            let filesLen = this.files.length;
            let storageRef = this.storage.ref();
            for(let i = 0; i < filesLen; i++) {
                let file = this.resizedFiles[i];
                let datetime = new Date().getTime();
                let path = `${this.databasePath}/${file.name}.jpeg`;
                let iRef = storageRef.child(path);
                let uploadTask: UploadTask = iRef.put(file);

                uploadTask.on('state_changed', (item) => {
                    this.totalUploaded = item.b > 0 ? item.b : 1;
                    return item;
                });

                uploadTask.then(() => {
                    if(filesLen - 1 == i){
                        iRef.getDownloadURL().then(url => {
                            let media = { path: path, filename: file.name, url: url };
                            this.media.push(media);
                            this.pushObjectData();
                        });
                    } else {
                        iRef.getDownloadURL().then(url => {
                            let media = { path: path, filename: file.name, url: url };
                            this.media.push(media);
                        });
                    }
                });
            }
        // No file selected
        } else {
            this.pushObjectData();
        }
    }

    private pushObjectData(){
        if(this.media){
            this.save(this.media);
        } else {
            this.save();
        }
    }

    private dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        let byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = decodeURI(dataURI.split(',')[1]);

        // separate out the mime component
        let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        let ia = new Uint8Array(byteString.length);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], {type:mimeString});
    }


    private readFile = (file, reader, callback) => {
      reader.onload = () => {
        callback(reader.result);
      }
      reader.readAsDataURL(file);
    }

    private readFiles = (files, index=0) => {
      // Create the file reader
      let reader = new FileReader();
      
      // If there is a file
      if(index in files){
        // Start reading this file
        this.readFile(files[index], reader, (result) => {
          // Create an img element and add the image file data to it
          let img = document.createElement("img");
          img.src = result;
      
          // Send this img to the resize function (and wait for callback)
          this.resize(img, 1080, 1080, files[index].name, (resized_jpeg, before, after)=>{
            // For debugging (size in bytes before and after)
            this.debug_size_before.push(before);
            this.debug_size_after.push(after);
      
            // Add the resized jpeg img source to a list for preview
            // This is also the file you want to upload. (either as a
            // base64 string or img.src = resized_jpeg if you prefer a file). 
            this.file_srcs.push(resized_jpeg);
      
            // Read the next file;
            this.readFiles(files, index+1);
          });
        });
      } else {
      }
    }

    private resize(img, MAX_WIDTH:number, MAX_HEIGHT:number, filename, callback){
      // This will wait until the img is loaded before calling this function
      return img.onload = () => {

        // Get the images current width and height
        let width = img.width;
        let height = img.height;

        // Set the WxH to fit the Max values (but maintain proportions)
        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        } else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
            }
        }

        // create a canvas object
        let canvas = document.createElement("canvas");

        // Set the canvas to the new calculated dimensions
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");  

        ctx.drawImage(img, 0, 0,  width, height); 

        // Get this encoded as a jpeg
        // IMPORTANT: 'jpeg' NOT 'jpg'
        let dataUrl = canvas.toDataURL('image/jpeg');
        let blob: Blob = this.dataURItoBlob(dataUrl);
        let resizedFile = new File([blob], filename);
        this.resizedFiles.push(resizedFile);
        // callback with the results
        callback(dataUrl, img.src.length, dataUrl.length);
      };

    }
}