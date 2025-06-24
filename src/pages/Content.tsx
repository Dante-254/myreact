import ListGroup from "../components/ListGroup";

const Content = () => {
      let items = ["New York", "Tokyo", "Manchester", "Madrid"];

  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  return (
    <>
    

    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    
    
    </>
  )
}

export default Content