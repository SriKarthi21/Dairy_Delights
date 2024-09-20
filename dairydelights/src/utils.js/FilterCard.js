
 const filterCard= (value,filterCategory) => {
  if(!filterCategory) return value;
  return value.filter((item)=>item.category.toLowerCase().includes(filterCategory.toLowerCase()))
}
 const searchCard=(value,searchText)=>{
  if(!searchText)return value;
  return value.filter((item)=>item.productName.toLowerCase().includes(searchText))
};
const applyFilters=(value,filterCategory,searchText)=>{
  let filterData=filterCard(value,filterCategory);
  if(searchText){
    filterData=searchCard(value,searchText);
  }
  return filterData;
}

export default applyFilters;