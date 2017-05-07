import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AuthService } from './../../../auth/shared/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';

class ListObservableWrapper
{
	name: string
	observable: BehaviorSubject<any>
	firebaseRef: FirebaseListObservable<any[]>
}

class ObjectObservableWrapper
{
	name: string
	observable: BehaviorSubject<any>
	firebaseRef: FirebaseObjectObservable<any>
}

@Injectable()
export class DatabaseService {

	private resourcesListObservables: ListObservableWrapper[];
	private resourcesObjectObservables: ObjectObservableWrapper[];

	constructor(
		private auth: AuthService,
		public af: AngularFire,
	) {
		console.info('DATABASE SERVICE STARTED')
		this.resourcesListObservables = new Array<ListObservableWrapper>();
		this.resourcesObjectObservables = new Array<ObjectObservableWrapper>();
	}

	public list = (resource_name, config = {}): Observable<any> => {
		let resource = this.resourcesListObservables.find((_resource) => _resource.name == resource_name);
		if(!resource){
			console.info("DATABASE SERVICE - Subscribing to " + resource_name + " list");
			resource = this.createResource('list', resource_name, config);
			resource.firebaseRef.subscribe((_list) => {
				if(_list){
					resource.observable.next(_list);
				}
			});
		}
		return resource.observable;
	};

	public object = (resource_name, config = {}): Observable<any> => {
		let resource = this.resourcesObjectObservables.find((_resource) => _resource.name == resource_name);
		if(!resource){
			console.info("DATABASE SERVICE - Subscribing to " + resource_name + " object");
			resource = this.createResource('object', resource_name);
			resource.firebaseRef.subscribe((_list) => {
				if(_list){
					resource.observable.next(_list);
				}
			});
		}
		return resource.observable;
	};

	public push = (resource_name, object) => {
		let resource = this.resourcesListObservables.find((_resource) => _resource.name == resource_name);
		if(resource){
			return resource.firebaseRef.push(object);
		} else {
			resource = this.createResource('list', resource_name);
			return resource.firebaseRef.push(object);
		}
	}

	public update = (resource_name, object) => {
		let resource = this.resourcesObjectObservables.find((_resource) => _resource.name == resource_name);
		if(resource){
			return resource.firebaseRef.update(object);
		} else {
			resource = this.createResource('object', resource_name);
			return resource.firebaseRef.update(object);
		}
	}

	public remove = (resource_name) => {
		let resource = this.resourcesObjectObservables.find((_resource) => _resource.name == resource_name);
		if(resource){
			return resource.firebaseRef.remove();
		} else {
			resource = this.createResource('object', resource_name);
			return resource.firebaseRef.remove();
		}
	}

	private createResource = (type, resource_name, config?) => {
    	let subject = new BehaviorSubject<any>([]);

    	let firebaseRef;

    	if(type == 'list'){
			firebaseRef = this.af.database.list(resource_name, config);
	    	subject['push'] = (obj) => {
	    		firebaseRef.push(obj);
	    	}
    	} else {
    		firebaseRef = this.af.database.object(resource_name);
	    	subject['update'] = (data) => {
	    		firebaseRef.update(data)
	    	}
	    	subject['remove'] = (data) => {
	    		firebaseRef.remove()
	    	}
    	}


        let resource = {
        	name: resource_name,
        	observable: subject,
        	firebaseRef: firebaseRef
        };

    	if(type == 'list'){
    		this.resourcesListObservables.push(resource);
    	} else {
    		this.resourcesObjectObservables.push(resource);
    	}
    	return resource;
	}

}

/*
        .map(items => {
            return items.reverse().map(item => {
                if(item.path){
                    var pathReference = this.storage.ref(item.path);
                    pathReference.getDownloadURL().then(url => {
                        item.downloadURL = url;
                    });
                }
                return item;
            });
        });*/