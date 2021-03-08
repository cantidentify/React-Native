import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const Info = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>


        <View style={styles.box3}>
          <Text style={styles.topBox}>ประวัติความเป็นมา</Text>
          <Text style={styles.detailText}></Text>
          <Card>
            <Card.Content>
              <Card.Cover source={{ uri: "https://i.ytimg.com/vi/3AjXCjXQ8ns/maxresdefault.jpg" }} />
              <Paragraph style={styles.paragraph}>
                {'\t\t\t\t\t\t\t\t'}วัดเทพลีลาพระอารามหลวง ตั้งอยู่ในแขวงหัวหมาก เขตบางกะปิกรุงเทพมหานคร ริมคลองแสนแสบ
                {'\n'}{'\n'}
                {'\t\t\t\t\t\t\t\t'}เจ้าพระยาบดินทรเดชา ซึ่งเป็นผู้ดูแลการขุดคลองแสนแสบ ในระหว่างที่ขุดคลองบางขนากนั้น นายทหารได้พบพระพุทธรูปปางลีลาศิลปะสุโขทัย เจ้าพระยาบดินทรเดชา จึงให้สร้างวัดขึ้น สันนิษฐานว่าสร้างขึ้นในช่วง พ.ศ.2381–2382 ก่อนหน้าที่เจ้าพระยาบดินทรเดชา (สิงห์ สิงหเสนี) จะยกทัพไปเมืองพระตะบอง ภายหลังสร้างวัดแล้วได้อัญเชิญพระพุทธรูปปางลีลาที่ประดิษฐานที่ริมคลองแสนแสบองค์นั้นมาประดิษฐานเป็นพระประธานในพระอุโบสถ และตั้งชื่อวัดว่า วัดเทพลีลา
              </Paragraph>

            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    marginLeft: 14,
    marginRight: 14,
  },
  box3: {
    marginTop: 5,
    width: "100%",
    backgroundColor: "white",
  },
  paragraph:{
    fontSize:16,
    lineHeight: 30,
    padding:15,
    
  },
  topBox: {
    backgroundColor: "white",
    color: "black",
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 14,
    marginTop:6
  },
  detailText: {
    fontSize: 16,
  },
});
