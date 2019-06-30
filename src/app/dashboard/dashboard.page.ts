import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { CrudService } from './../services/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 
 
  userEmail: string;
  students: any;
  studentName: string;
  studentAge: number;
  studentAddress: string;
  studentStatus: string;
 
  constructor(private crudService: CrudService,private navCtrl: NavController,private authService: AuthenticateService) { }
 
  ngOnInit() {
    this.crudService.read_Students().subscribe(data => {
 
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Age: e.payload.doc.data()['Age'],
          Address: e.payload.doc.data()['Address'],
          Status: e.payload.doc.data()['Status'],
        };
      })
      console.log(this.students);
     });
     if(this.authService.userDetails()){
      this.userEmail = this.authService.userDetails().email;
    }else{
      this.navCtrl.navigateBack('');
    }
  }

  CreateRecord() {
    let record = {};
    record['Name'] = this.studentName;
    record['Age'] = this.studentAge;
    record['Address'] = this.studentAddress;
    record['Status'] = this.studentStatus;
    this.crudService.create_NewStudent(record).then(resp => {
      this.studentName = "";
      this.studentAge = undefined;
      this.studentAddress = "";
      this.studentStatus = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.crudService.delete_Student(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditAge = record.Age;
    record.EditAddress = record.Address;
    record.EditStatus = record.Status;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    record['Status'] = recordRow.EditStatus;
    this.crudService.update_Student(recordRow.id, record);
    recordRow.isEdit = false;
  }

 
  logout(){
    this.authService.logoutUser()
    .then(res => {
      console.log(res);
      this.navCtrl.navigateBack('');
    })
    .catch(error => {
      console.log(error);
    })
  }
}