import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserCredential } from '@firebase/auth-types'; // For TypeScript type definition
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.default.User | null>; // Update the type to firebase.default.User

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
  }

  // Sign in with email and password
  signInWithEmail(email: string, password: string): Promise<UserCredential> { // Update the return type
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Sign out
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

  // Get the current user
  getCurrentUser(): Observable<firebase.default.User | null> { // Update the return type
    return this.user$;
  }


}
