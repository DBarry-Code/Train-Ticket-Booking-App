import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { APIResonse, Customer, Login } from "./model/train";
import { FormsModule } from "@angular/forms";
import { TrainService } from "./service/train.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  registerObj: Customer = new Customer();
  loginObj: Login = new Login();
  trainService = inject(TrainService);

  onRegister() {
    if (
      this.registerObj.firstName == "" ||
      this.registerObj.lastName == "" ||
      this.registerObj.password == "" ||
      this.registerObj.phone == ""
    ) {
      alert("Please put you data in!");
    } else {
      this.trainService.createNewCoustomer(this.registerObj).subscribe((res: APIResonse) => {
        if (res.result) {
          alert("Register Done");
        } else {
          alert(res.message);
        }
      });
    }
  }

  onLogin() {
    if (this.loginObj.password == "" || this.loginObj.phone == "") {
      alert("Put you Login data in!!!");
    } else {
      this.trainService.newLogin(this.loginObj).subscribe((res: APIResonse) => {
        if (res.result) {
          alert("Yau are login");
        } else {
          alert(res.message);
        }
      });
    }
  }

  openRegister() {
    const model = document.getElementById("registerModel");
    if (model != null) {
      model.style.display = "block";
    }
  }

  closeRegister() {
    const model = document.getElementById("registerModel");
    if (model != null) {
      model.style.display = "none";
    }
  }

  openLogin() {
    const model = document.getElementById("loginModel");
    if (model != null) {
      model.style.display = "block";
    }
  }

  closeLogin() {
    const model = document.getElementById("loginModel");
    if (model != null) {
      model.style.display = "none";
    }
  }
}
