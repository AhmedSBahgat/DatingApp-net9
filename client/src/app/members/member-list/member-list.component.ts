import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { Member } from '../../_models/member';
import { MemberCardComponent } from "../member-card/member-card.component";

@Component({
  selector: 'app-member-list',
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css'
})
export class MemberListComponent implements OnInit {
  // This component is used to display a list of members
  // It will be implemented in the future
  memberService = inject(MembersService);

  ngOnInit(): void {

    if (this.memberService.members().length === 0)
      // Initialization logic can go here
      this.loadMembers(); // Load members when the component initializes
  }
  loadMembers() {
    // This method will be used to load members from the service
    this.memberService.getMembers()
  }
}
