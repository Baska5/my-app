import {View, Text, FlatList} from 'react-native'
import ListItem from '../components/ListItem';

const Profile = () => {

  const data = [
    {
      id: 1,
      title: 'title1',
      user: 'nika1',
      desc: 'big big desc1'
    },
    {
      id: 2,
      title: 'title2',
      user: 'nika2',
      desc: 'big big desc2'
    },
    {
      id: 3,
      title: 'title3',
      user: 'nika3',
      desc: 'big biscnw awndo aiwondoaindoiwa dnaw oidn iowscnw awndo aiwondoaindoiwa dnaw oidn iowg desc3'
    },
    {
      id: 4,
      title: 'React Native Tutorial - 18 - Custom Components',
      user: 'nika4',
      desc: 'big big descscnw awndo aiwondoaindoiwa dnaw oidn iowscnw awndo aiwondoaindoiwa dnaw oidn iowscnw awndo aiwondoaindoiwa dnaw oidn iow4'
    },
    {
      id: 5,
      title: 'title5',
      user: 'nika5',
      desc: 'big big descnw awndo aiwondoaindoiwa dnaw oidn iowfnoinodiwaondio nw wnd iawon foawinw ioawno wao dawion fion oiaw oijawo d5'
    },
    {
      id: 6,
      title: 'title6',
      user: 'nika6',
      desc: 'big big descscnw awndo aiwondoaindoiwa dnaw oidn iow6'
    },
  ]

  return (
    <View>
      <Text>ეს არის პროფილი</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <ListItem title={item.title} user={item.user} desc={item.desc}/>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Profile;