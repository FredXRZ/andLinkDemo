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
    // let daa = this.parseTreeToRows(this.tableInfo)
    console.log(this.list);
    // console.log(daa)
  },
  methods: {
    parseTreeToRows(node, data = [], row = []) {
      if (!node) {
        data.push(row);
      } else {
        for (let i = 0; i < node.length; i++) {
          const child = node[i].children;
          const name = { value: node[i].name };
          const cell = { value: node[i].score };
          /******************添加的代码******************/
          //深度克隆父亲，因为后代共用了该引用数据
          const extendRow = [...JSON.parse(JSON.stringify(row)), name, cell];
          console.log(extendRow);
          if (extendRow.length === 2) {
            //第一列
            extendRow[0].rowspan = 1;
            extendRow[1].rowspan = 1;
          } else if (extendRow.length === 4) {
            extendRow[0].rowspan = 1;
            extendRow[1].rowspan = 1;
            extendRow[2].rowspan = 1;
            extendRow[3].rowspan = 1;
          } else if (extendRow.length > 5) {
            //将该行的最后一列的rowspan赋给上一列
            //再将自身置为1(避免最后一列无值)
            extendRow[extendRow.length - 6].rowspan =
              i === 0 ? this.computeLeafCounts(node) : 0;
            extendRow[extendRow.length - 5].rowspan =
              i === 0 ? this.computeLeafCounts(node) : 0;
            extendRow[extendRow.length - 4].rowspan =
              i === 0 ? this.computeLeafCounts(node) : 0;
            extendRow[extendRow.length - 3].rowspan =
              i === 0 ? this.computeLeafCounts(node) : 0;
            extendRow[extendRow.length - 2].rowspan = 1;
            extendRow[extendRow.length - 1].rowspan = 1;
          }
          /******************添加的代码******************/
          this.parseTreeToRows(child, data, extendRow);
        }
      }

      return data;
    },
    computeLeafCounts(node) {
      // console.log(node)
      if (!node) {
        node.rowspan = 1;
        return 1;
      } else {
        let leafCount = 0;
        for (let i = 0; i < node.length; i++) {
          leafCount = leafCount + this.computeLeafCounts(node[i].children);
        }
        node.rowspan = leafCount;
        return leafCount;
      }
    },
    parseTreeToRow(node, data = [], row = [], rootNode = {}) {
      if (!node.children) {
        data.push(row);
      } else {
        if (row.length == 0) {
          rootNode = node;
        }
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          const name = { value: child.name };
          const cell = { value: child.score };
          console.log(child);
          /******************添加的代码******************/
          //深度克隆父亲，因为后代共用了该引用数据
          const extendRow = [...JSON.parse(JSON.stringify(row)), name, cell];
          console.log(extendRow);
          if (extendRow.length === 2) {
            console.log(Boolean(i === 0))
            //第一列
            extendRow[0].rowspan = i === 0? this.computeLeafCount(node):0;
            extendRow[1].rowspan = i === 0? this.computeLeafCount(node):0;
          } else if (extendRow.length > 5) {
            //将该行的最后一列的rowspan赋给上一列
            //再将自身置为1(避免最后一列无值)
            // console.log(Boolean(extendRow[extendRow.length - 6].rowspan))
            console.log(extendRow[extendRow.length - 6].rowspan)
            extendRow[extendRow.length - 6].rowspan =
              i === 0 ? this.computeLeafCount(node) : 0;
            extendRow[extendRow.length - 5].rowspan =
              i === 0 ? this.computeLeafCount(node) : 0;
            extendRow[extendRow.length - 4].rowspan =
              i === 0 ? this.computeLeafCount(node) : 0;
            extendRow[extendRow.length - 3].rowspan =
              i === 0 ? this.computeLeafCount(node) : 0;
            extendRow[extendRow.length - 2].rowspan = 1;
            extendRow[extendRow.length - 1].rowspan = 1;
          }
          /******************添加的代码******************/
          this.parseTreeToRow(child, data, extendRow, rootNode);
        }
      }
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