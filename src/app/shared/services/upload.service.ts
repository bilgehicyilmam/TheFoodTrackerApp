import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { Observable } from 'rxjs';

@Injectable()
export class UploadService {

  private FOLDER = 'recipe-pictures/';

  private bucket = new S3(
    {
      accessKeyId: 'AKIAS7IC2PPZPHHTVWMZ',
      secretAccessKey: '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',
      region: 'eu-central-1'
    }
  );

  constructor(private http: HttpClient) {
  }

  public uploadFile(file): Observable<{ Location: '' }> {
    const contentType = file.type;
    const params = {
      Bucket: 'fpbhbounrecipepictures',
      Key: this.FOLDER + file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    return new Observable(observer => {
      this.bucket.upload(params, (err, data) => {
        if (err) {
          observer.error(err);
        }
        observer.next(data);
        observer.complete();
      });
    });
  }
}
