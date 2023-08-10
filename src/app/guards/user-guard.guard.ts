import { CanActivateFn } from '@angular/router';

export const userGuardGuard: CanActivateFn = (route, state) => {
  let user = JSON.parse(localStorage.getItem("todoUser") !)
  if(!user){
    alert("You're not logged in")
    return false;
  }else{
    return true
  }
};
