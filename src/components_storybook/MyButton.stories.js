import MyButton from "../components/MyButton"

export default {
    title : "componenets/MyButton",
    component :"MyButton",
    argTypes : {
        text : {control : "text"},
        color : {control : "color"}
    }
}

const Template = (args) => <MyButton{...args}/>

export const LeftButton = Template.bind({});

LeftButton.args = {
    text : "<",
   color : "red"
}

export const RightButton = Template.bind({});

RightButton.args = {
    text : ">",
    color: "blue"
}

export const StorybookTitle = (args) => {
    return <MyButton{...args}/>
}