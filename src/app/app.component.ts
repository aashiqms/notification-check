import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { SwPush } from "@angular/service-worker";

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


import { DashboardComponent } from "./components/dashboard/dashboard.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent, CommonModule, HttpClientModule, RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'notify-pwa';
  constructor(
    private swPush: SwPush
  ) {
  }

  ngOnInit(): void {
    this.subscribeToPush();
  }

  subscribeToPush(): void {
    this.swPush.messages.subscribe(
      (res: any) => {
        console.log(res, " Message to show in the notificaiton ");
      }
    );
  }
}
