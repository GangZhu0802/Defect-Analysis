import { Component } from "@angular/core";
import * as echarts from 'echarts'
import { defects } from "src/app/assets/defect";

@Component({
    selector: 'app-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.less']
})
export class SummaryComponent {
    public selectedDefects: any[] = [];
    public defectsData: any[] = [];
    public chart: any;
    public hasSelected: boolean = false;


    get total(){
        return defects.length;
    }

    ngOnInit(): void {
        this.selectedDefects = defects;
        
        defects.forEach(x => {
            let existingItem = this.defectsData.find(y => y.name === x.type);
            if (existingItem) {
                existingItem.value += 1;
            } else {
                existingItem = {
                    name: x.type,
                    value: 1,
                    select: {
                        disabled: false
                    }
                }
                this.defectsData.push(existingItem)
            }
        });
        console.log(this.defectsData)
        this.chart = echarts.init(document.getElementById('chart-host') as any);
       
        this.chart.setOption({
            // roseType: 'area',
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color: ['orange', 'green', 'blue', 'yellow', 'red', 'pink', 'deepskyblue', 'purple', 'greenyellow', 'burlywood'],
            series: [
                {
                    name: 'Defect type',
                    type: 'pie',
                    selectedMode: 'single',

                    data: this.defectsData,
                    // label: {
                    //     position: 'inside'
                    //   },
                }
            ],
            legend: {
                type: 'scroll',
                orient: 'horizontal',
                left: 'left'
              }
        });

        this.chart.on('selectChanged', (event: any)=>{
            this.handleSelect(event)
        })
    }


    handleSelect(event: any){
        if(event.selected[0]){
            const idx = event.selected[0].dataIndex;
            this.selectedDefects = defects.filter(x=>x.type === this.defectsData[idx].name);
            this.hasSelected = true;
        }else{
            this.hasSelected = false
            this.selectedDefects = defects;
        }
    }

    openUrl(url: string){
        window.open(url)
    }
}