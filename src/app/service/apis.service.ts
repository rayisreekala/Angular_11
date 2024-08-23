import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class ApisService {
    

    constructor(private http: HttpClient, private router: Router) {}

    getApi(endpoint): Observable<any> {
        return this.http.get(endpoint).pipe(
            map((response: Response) => {
                return response;
            }),
            catchError(this.handleError("login"))
        );
    }

    postApi(endpoint, payload): Observable<any> {
        return this.http.post(endpoint, payload).pipe(
            map((response: Response) => {
                return response;
            }),
            catchError(this.handleError("login"))
        );
    }

    putApi(endpoint, payload): Observable<any> {
        return this.http.put(endpoint, payload).pipe(
            map((response: Response) => {
                return response;
            }),
            catchError(this.handleError("login"))
        );
    }

    deleteApi(endpoint): Observable<any> {
        return this.http.delete(endpoint).pipe(
            map((response: Response) => {
                return response;
            }),
            catchError(this.handleError("login"))
        );
    }

    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            if (
                error.error.status === "401" &&
                error.error.message === "Unauthorized"
            ) {
                this.router.navigate(["/"]);
            }
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
