import { Component, OnInit } from '@angular/core';
import { DownloaderService } from '../../services/downloader.service';
@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.css']
})
export class DownloaderComponent implements OnInit {
  contents: string;
constructor(private downloaderService: DownloaderService) { }

  ngOnInit() {
  }
download() {
  this.downloaderService.getTextFile('assets/textfile.txt')
    .subscribe(results => this.contents = results);
}
}
