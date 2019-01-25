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
        v-for="(item,index) in tableInfo.children"
        :key="index"
      >
        <!-- <tr
          v-for="(val, key) in tableTimes.allRow"
          :key="key"
        >
          <td>{{item.name}}</td>
          <td>{{item.score}}</td>
          <td>{{item.secondLever[index].name}}</td>
          <td>{{item.secondLever[index].score}}</td>
          <td>{{val.name}}</td>
          <td>{{val.score}}</td>
        </tr> -->
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
      <tr
        v-for="(row, i) in list"
        :key="i"
      >
        <td
          v-for="(cell, j)  in row"
          :key="j"
          v-if="cell.rowspan"
          :rowspan="cell.rowspan"
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
      tableInfo: {
        children: [
          {
            name: "一级指标内容",
            score: "80",
            children: [
              {
                name: "二级指标内容1",
                score: "61",
                children: [
                  {
                    name: "三级指标内容1",
                    score: "10"
                  },
                  {
                    name: "三级指标内容2",
                    score: "20"
                  },
                  {
                    name: "三级指标内容3",
                    score: "30"
                  }
                ]
              },
              {
                name: "二级指标内容2",
                score: "70",
                children: [
                  {
                    name: "三级指标内容4",
                    score: "40"
                  },
                  {
                    name: "三级指标内容5",
                    score: "50"
                  },
                  {
                    name: "三级指标内容6",
                    score: "60"
                  }
                ]
              },
              {
                name: "二级指标内容3",
                score: "80",
                children: [
                  {
                    name: "三级指标内容7",
                    score: "70"
                  },
                  {
                    name: "三级指标内容8",
                    score: "80"
                  },
                  {
                    name: "三级指标内容9",
                    score: "80"
                  },
                  {
                    name: "三级指标内容10",
                    score: "90"
                  }
                ]
              }
            ]
          }
        ]
      },
      tableTimes: {
        secondRow: [],
        allRow: []
      },
      list: null
    };
  },
  mounted() {
    // this.createTable();
    this.list = this.parseTreeToRow(this.tableInfo);
    console.log(this.list);
  },
  methods: {
    parseTreeToRow(node, data = [], row = [],level=1) {
      if (!node.children) {
        console.log(row)
        data.push(row);
      } else {
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          console.log(child)
          const name = {
            value:child.name,
            rowspan:this.computeLeafCount(child)
          }
          const score = {
            value:child.score,
            rowspan:this.computeLeafCount(child)
          }
          let arr = [...row,name,score];
          if(arr.length>5 && level>3){
            arr[0].rowspan = 0;
            arr[1].rowspan = 0;
          }
          // console.log(arr)
          level++;
          this.parseTreeToRow(child, data, arr,level);
        }
      }
      console.log(level)
      return data;
    },
    computeLeafCount(node) {
      // console.log(node)
      if (!node.children) {
        node.rowspan = 1;
        return 1;
      } else {
        let leafCount = 0;
        for (let i = 0; i < node.children.length; i++) {
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