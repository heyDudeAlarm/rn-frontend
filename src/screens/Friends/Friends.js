import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import FriendsList from "../../components/FriendsListView";
import CustomRow from "../../components/FriendsList";
import { async } from "@firebase/util";

export default function Friends(props) {
  const [friend, setFriend] = useState({
    // key: 0,
    user_id: 0,
    email: '',
    nickname: '',
    password: '',
    message: '',
    profile_img: '',
    device_token: '',
  });
  useEffect(()=> {
    getData();
  })
  const getData = async () => {
    // 서버에서 json형태로 받아옴
    //유저의 친구 목록 가져오기
    //현재 유저는 ? localStorage에 저장이 되어있ㄴ느가?!
    await fetch('http://13.48.25.201:8082/friend/list', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    }).then(res => { 
      console.log(res)
      return res.json()
    })
    .then(json => setFriend(json))
    .catch(err => console.log('친구 데이터 가져오기 실패 ㅠㅠ',err));
    // return [
    //   {
    //     key: 1,
    //     name: "하진",
    //     message: "나의 목소리가 담긴 알람 사운드를 갖고 싶다구요?",
    //     profile_img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    //     device_token: "ExponentPushToken[2zU2WrCOFkCvQfxXnSTX9k]",
    //   },
    // ];
  };
  
  const renderItem = ({ item }) => (
    <CustomRow
        name={item.nickname}
        message={item.message}
        profile_img={item.profile_img}
        onPress={props.toAskrecord}
        // token={item.device_token}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>친구 목록</Text>
      </View>
      <View style={styles.alarms}>
        <FriendsList 
          itemList={friend}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
  },
  header: {
    flex: 1.5,
    justifyContent: "center",
    paddingLeft: 18,
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  explain: {
    color: "#a6a6a6",
    marginTop: 30,
  },
  alarms: {
    flex: 9,
    justifyContent: "center",
    alignContent: "center",
  },
});
