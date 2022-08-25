import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddStudentRequest } from '../models/api-models/add-student-request.model';
import { Student } from '../models/api-models/student.model';
import { updatestudentRequest } from '../models/api-models/update-student-request.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = 'https://localhost:44333'

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]>{
     return this.httpClient.get<Student[]>(this.baseApiUrl + '/students');
  }

  getStudent(studentId : string): Observable<Student>{
    return this.httpClient.get<Student>(this.baseApiUrl+'/students/'+ studentId)
  }

  updatestudent(studentId:string, studentRequest: Student): Observable<Student>{
    const updateStudentRequest: updatestudentRequest={
      firstName:studentRequest.firstName,
      lastName:studentRequest.lastName,
      dateOfBirth:studentRequest.dateOfBirth,
      email:studentRequest.email,
      mobile:studentRequest.mobile,
      genderId:studentRequest.genderId,
      physicalAddress:studentRequest.address.physicalAddress,
      postalAddress:studentRequest.address.postalAddress
    }
    return this.httpClient.put<Student>(this.baseApiUrl+'/students/'+studentId, updateStudentRequest)
  }

  deleteStudent(studentId:string): Observable<Student>{
    return this.httpClient.delete<Student>(this.baseApiUrl+'/students/'+ studentId)
  }

  addStudent(studentRequest: Student) : Observable<Student>{
    const addStudentRequest: AddStudentRequest={
      firstName:studentRequest.firstName,
      lastName:studentRequest.lastName,
      dateOfBirth:studentRequest.dateOfBirth,
      email:studentRequest.email,
      mobile:studentRequest.mobile,
      genderId:studentRequest.genderId,
      physicalAddress:studentRequest.address.physicalAddress,
      postalAddress:studentRequest.address.postalAddress
    }
    return this.httpClient.post<Student>(this.baseApiUrl+'/students/add', addStudentRequest);
  }

}
