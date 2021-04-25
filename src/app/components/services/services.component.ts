import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  images: any[] = [];

  constructor() {
    this.images.push({ src: "assets/Images/Services/amc.png", text: "Annual Maintenance Contract", alt: "amc" });
    this.images.push({ src: "assets/Images/Services/cctv.png", text: "CCTV Installation", alt: "cctv" });
    this.images.push({ src: "assets/Images/Services/cpu.png", text: "Hardware Installation/Upgradation/Configuration", alt: "hardware" });
    this.images.push({ src: "assets/Images/Services/installation.png", text: "Assembly & Installation", alt: "installation" });
    this.images.push({ src: "assets/Images/Services/LaptopRepair.png", text: "Laptop/Desktop Repair", alt: "laptop" });
    this.images.push({ src: "assets/Images/Services/mainten.png", text: "Computer Maintenance", alt: "maintenance" });
    this.images.push({ src: "assets/Images/Services/recovery.png", text: "Data Recovery & Backup", alt: "recovery" });
    this.images.push({ src: "assets/Images/Services/software.png", text: "Software Installation", alt: "software" });
    this.images.push({ src: "assets/Images/Services/virus.png", text: "Virus & Spyware Removal", alt: "virus" });
    this.images.push({ src: "assets/Images/Services/Wifi.png", text: "Computer Networking & Wi-Fi", alt: "networking" });
  }

  ngOnInit(): void {
  }

}
