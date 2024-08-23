import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  images:any[] = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQTasZIPBdmc-x6q6qCHHBGySw-zMnAkVzA&s",
    "https://mc.webpcache.epapr.in/mcms.php?size=medium&in=https://mcmscache.epapr.in/post_images/website_350/post_15685610/thumb.jpg"
   ]
  constructor() { }

  ngOnInit(): void {
  }

}




