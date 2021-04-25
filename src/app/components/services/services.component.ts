import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  images: any[] = [];
  baseURL: string ="https://raw.githubusercontent.com/phoenixSaket/genius/main/src/assets/Images/Services/";

  constructor() {
    this.images.push({ src: this.baseURL + "amc.png", text: "Annual Maintenance Contract", alt: "amc" });
    this.images.push({ src: this.baseURL + "cctv.png", text: "CCTV Installation", alt: "cctv" });
    this.images.push({ src: this.baseURL + "cpu.png", text: "Hardware Installation / Configuration", alt: "hardware" });
    this.images.push({ src: this.baseURL + "Installation.png", text: "Assembly & Installation", alt: "installation" });
    this.images.push({ src: this.baseURL + "LaptopRepair.png", text: "Laptop / Desktop Repair", alt: "laptop" });
    this.images.push({ src: this.baseURL + "mainten.png", text: "Computer Maintenance", alt: "maintenance" });
    this.images.push({ src: this.baseURL + "recovery.png", text: "Data Recovery & Backup", alt: "recovery" });
    this.images.push({ src: this.baseURL + "software.png", text: "Software Installation", alt: "software" });
    this.images.push({ src: this.baseURL + "virus.png", text: "Virus & Spyware Removal", alt: "virus" });
    this.images.push({ src: this.baseURL + "Wifi.png", text: "Computer Networking & Wi-Fi", alt: "networking" });
  }

  ngOnInit(): void {
  }

}
