import { View, Text, StyleSheet } from 'react-native'

const ListItem = ({title, user, desc}) => {
    return (
        <View style={{backgroundColor:'#FFFFFF', margin:5, borderRadius:10}}>
            <View style={{justifyContent:"center", alignItems:"center", flexDirection:"row"}}>
                <View style = {{width:"70%", justifyContent:"center", alignItems:"flex-start"}}>
                    <Text style={{fontWeight:'700', fontSize:20, marginStart:10}}>{title}</Text>
                </View>
                <View style={{width:"30%", justifyContent:"center", alignItems:"flex-end"}}>
                    <Text style={{fontWeight:'200', marginEnd:10}}>{user}</Text>
                </View>
            </View>
            <View style={{justifyContent:"center", alignItems:"flex-start", marginTop:5, marginBottom:5}}>
                <Text style={{marginStart:10}}>{desc}</Text>
            </View>
        </View>
    )
}

export default ListItem;

