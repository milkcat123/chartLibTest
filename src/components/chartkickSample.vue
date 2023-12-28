<template>
  <div>
    <column-chart :data="chartData" :plugins="{'chartjsSample':false}"></column-chart>
  </div>
</template>
<script>
export default {
  name: 'chartkickSample',
  props:['chartData'],
  data() {
    return {
      title:"Chartkick",
      note:"#輔助型套件，幫其他套件適用在vue上"
    }
  },
  mounted() {
    this.$emit('changenote',this.note);
    this.$emit('changetitle',this.title);
    this.$emit('changelink',"https://chartkick.com/vue");
    console.log('chartData',this.chartData);
  },
}
</script>

