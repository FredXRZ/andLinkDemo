<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>一级指标(权重%)</th>
          <th>得分</th>
          <th>二级指标(权重%)</th>
          <th>得分</th>
          <th>三级指标(权重%)</th>
          <th>得分</th>
        </tr>
      </thead>
      <tbody
        v-for="(item,index) in tableInfo"
        :key="index"
      >
        <tr
          v-for="(val, key) in tableTimes.allRow"
          :key="key"
        >
          <td>{{item.name}}</td>
          <td>{{item.score}}</td>
          <td>{{item.secondLever[index].name}}</td>
          <td>{{item.secondLever[index].score}}</td>
          <td>{{val.name}}</td>
          <td>{{val.score}}</td>
        </tr>
        <!-- <tr>
                    <td rowspan="3">上市公司治理结构对投资这决策参与权的保护程度</td>
                    <td rowspan="3">73.56</td>
                    <td rowspan="3">1.1公司治理及内控有效性</td>
                    <td rowspan="3">84.62</td>
                    <td>1.1.1治理文件的制定情况</td>
                    <td>53.85</td>
                </tr>
                <tr>
                    <td>1.1.2董事长与总经理兼任情况</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>1.1.3内部控制有效性</td>
                    <td>100</td>
                </tr> -->
      </tbody>
    </table>
    <table>
  <tr v-for="(row, i) in list" :key="i">
     <td
       v-for="(cell, j)  in row"
       :key="j"
      >
       <div class="cell">{{ cell.value }}</div>
     </td>
   </tr>
 </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 数据格式
      tableInfo: [
        {
          name: "一级指标内容",
          score: "80",
          children: [
            {
              name: "二级指标内容",
              score: "61",
              children: [
                {
                  name: "三级指标内容",
                  score: "10"
                },
                {
                  name: "三级指标内容",
                  score: "20"
                },
                {
                  name: "三级指标内容",
                  score: "30"
                }
              ]
            },
            {
              name: "二级指标内容",
              score: "70",
              children: [
                {
                  name: "三级指标内容",
                  score: "40"
                },
                {
                  name: "三级指标内容",
                  score: "50"
                },
                {
                  name: "三级指标内容",
                  score: "60"
                }
              ]
            },
            {
              name: "二级指标内容",
              score: "80",
              children: [
                {
                  name: "三级指标内容",
                  score: "70"
                },
                {
                  name: "三级指标内容",
                  score: "80"
                },
                {
                  name: "三级指标内容",
                  score: "90"
                }
              ]
            }
          ]
        }
      ],
      tableTimes: {
        secondRow: [],
        allRow: []
      },
      list:null
    };
  },
  mounted() {
    this.createTable();
    this.list = this.parseTreeToRow(this.tableInfo[0]);
    console.log(this.list)
  },
  methods: {
    parseTreeToRow(node, data = [], row = []) {
    if (!node.children) {
    data.push(row);
   } else {
     for (let i = 0; i < node.children.length; i++) {
       const child = node.children[i];
       const name = {name:child.name}
       const cell = { value: child.score };
       this.parseTreeToRow(child, data, [...row, name,cell]);
     }
   }
   return data;
},
computeLeafCount(node) {
    if(!node.children){
      node.rowspan = 1;
      return 1;
    } else {
      let leafCount = 0;
      for(let i = 0 ; i < node.children.length ; i++) {
        leafCount = leafCount + this.computeLeafCount(node.children[i]);
      }
      node.rowspan = leafCount;
      return leafCount;
    }
  },
    createTable() {
      let obj = this.tableInfo;
      console.log(obj);
      let len = 0;
      let arr = [];
      obj.map(item => {
        if (item.secondLever) {
          this.tableTimes.secondRow.push(item.secondLever.length);
          item.secondLever.map((val, key) => {
            val.rowSpan = key;
            if (val.thirdLever) {
              console.log(val.thirdLever);
              val.thirdLever.map(value => {
                arr.push(value);
              });
            }
          });
        }
      });

      console.log(this.tableTimes.secondRow);
      console.log(arr);
      this.tableTimes.allRow = [...arr];
    }
  }
};
</script>
<style scoped>
table {
  margin-top: 15px;
  width: 100%;
  border: 1px solid #e9eaec;
  border-collapse: collapse;
}
th {
  background-color: #f8f8f9;
}
th,
td {
  padding: 5px;
  border: 1px solid #e9eaec;
  text-align: center;
  vertical-align: top;
  line-height: 30px;
}
</style>