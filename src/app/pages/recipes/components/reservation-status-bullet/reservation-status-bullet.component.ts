import { Component, OnInit, Input } from "@angular/core";

import { ReservationStatus } from "../../../../shared/services/reservation-list/reservation-status";

@Component({
  selector: "app-reservation-status-bullet",
  templateUrl: "reservation-status-bullet.component.html"
})
/**
 * Reservation status bulled created for reservation-table
 */
export class ReservationStatusBulletComponent implements OnInit {
  /**
   * Reservation status which is used for colorizing bullets
   */
  @Input()
  public status: ReservationStatus;

  public reservationStatus = ReservationStatus;

  constructor() {}

  ngOnInit() {}
}
