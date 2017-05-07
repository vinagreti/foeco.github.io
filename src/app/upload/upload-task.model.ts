export interface UploadTask {
    snapshot: firebase.storage.UploadTaskSnapshot;
    
    cancel(): boolean;

    catch(onRejected: (a: Error) => any): firebase.Promise<any>;
    
    on(event: firebase.storage.TaskEvent, nextOrObserver?: null|Object,
       error?: ((a: Error) => any)|null, complete?: (() => any)|null): Function;
    
    pause(): boolean;
    
    resume(): boolean;
    
    then(
        onFulfilled?: ((a: firebase.storage.UploadTaskSnapshot) => any)|null,
        onRejected?: ((a: Error) => any)|null
    ): firebase.Promise<any>;
}