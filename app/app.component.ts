import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `/app/app.template.html`,
})
export class AppComponent {
  private usuario = { nombreusuario: 'Oscar', pswd: '1234' };

  onSubmit(value: any) {
    alert(JSON.stringify(value));
  }

}
