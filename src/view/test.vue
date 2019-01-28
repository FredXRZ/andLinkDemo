<template>
  <div>
    <table class="table_list">
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
      <tbody>
         <tr v-for="(row, i) in list" :key="i">
           <template v-for="(cell, j)  in row">
              <td :key="j" v-if="cell.rowspan" :rowspan="cell.rowspan" @click="goThirdDetail(cell)">
                <div class="cell">{{ cell.value }}</div>
              </td>
           </template>
        </tr>
      </tbody>
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
    this.list = this.parseTreeToRow(this.tableInfo);
    console.log(this.list);
  },
  methods: {
    parseTreeToRow(node, data = [], row = []) {
      if (!node.children) {
        if(data.length!=0){
          row[0].rowspan = 0;
          row[1].rowspan = 0;
        }
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
          const extendRow = [ ...JSON.parse(JSON.stringify(row)),name,score];
          if (extendRow.length > 5) {
            extendRow[extendRow.length - 4].rowspan = i === 0 ? this.computeLeafCount(node) : 0;
            extendRow[extendRow.length - 3].rowspan = i === 0 ? this.computeLeafCount(node) : 0;
            extendRow[extendRow.length - 2].rowspan = 1;
            extendRow[extendRow.length - 1].rowspan = 1;
          }
          this.parseTreeToRow(child, data, extendRow);
        }
      }
      // console.log(level)
      return data;
    },
    computeLeafCount(node) {
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
    goThirdDetail(el){
      console.log(el)
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
  vertical-align: middle;
  line-height: 30px;
}
</style>