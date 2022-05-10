import { Component, OnInit } from '@angular/core';
import { TreeService } from '../tree.service';

@Component({
  selector: 'app-p-tree-table',
  templateUrl: './p-tree-table.component.html',
  styleUrls: ['./p-tree-table.component.css']
})
export class PTreeTableComponent implements OnInit {

  cols: any =[
    {field: "name", displayName: "Technology",},
    {field: "size", displayName: "Limit",}
  ];
  treeData: any = [];
  constructor(private treeService: TreeService) { }

  ngOnInit(): void {
    this.treeService.getData().subscribe((res: any)=>{
      console.log('res', res);
      
      this.treeData = res.data;
    })

  }

}
