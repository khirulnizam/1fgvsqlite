import { Component, OnInit } from '@angular/core';
import { DbcrudService } from './../services/dbcrud.service';
import {  HttpHeaders,HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-janajson',
  templateUrl: './janajson.page.html',
  styleUrls: ['./janajson.page.scss'],
})
export class JanajsonPage implements OnInit {

  constructor(
    private crud: DbcrudService,//from dborang.service
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.jsonusers=JSON.stringify(this.crud.USERS);
  }




  urlinsertbanyak:any="https://khirulnizam.com/training/2fgvinsertusers.php";
  //urlinsert1orang:any="https://khirulnizam.com/training/1nsert1orang.php";//server
  //urlinsert1orang:any="https://192.168.1.103/training/1nsertbanyakorang.php";//local
  
  headers:HttpHeaders;
  success:any;
  error:any;
  jsonusers:any;

  simpanOnline(){
    this.crud.getAllUsers()

        //headers
        this.jsonusers=JSON.stringify(this.crud.USERS);
    
        this.headers=new HttpHeaders();
        this.headers.append('ContentType', 'application/json');
        //transmit to server
        this.http.post(this.urlinsertbanyak,this.crud.USERS,{headers:this.headers})
          .subscribe(data=>{
            this.success=data['success']
            //console.log('berjaya');
            console.log(this.success);
            //console.log(this.error);
            alert("Data telah dihantar, terima kasih " +data['all']);
        },error=> {
          //console.log('error');
            console.log(this.error);
            alert("Serabut simpanan rekod ada masalah: "+error);
        });
  }

}
