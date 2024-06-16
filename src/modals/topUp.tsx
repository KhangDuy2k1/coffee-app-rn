import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectWallet } from '../commons/redux/slices/wallet';
import { setVisibleWallet } from '../commons/redux/slices/wallet';
import { topUp } from '../apis/top-up';

export const TopUpModal = () => {
  const [money, setMoney] = useState<number>(0);
  const dispatch = useDispatch();
  const wallet = useSelector(selectWallet);
  const getMoney = (value: any) => { 
    setMoney(value);
  }
  const cancle = () => {
    dispatch(setVisibleWallet(false))
  }
  const HandleTopUp = async() => { 
    try {
        if(money === 0) { 
            alert("số tiền nạp phải khác 0")
            return;
        }
        if(isNaN(money)){
            alert("số tiền nạp phải là 1 số");
            return;
        }
        const res = await topUp({amountWantToAdd: money});
        dispatch(setVisibleWallet(false));
        alert(res.mes)
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <View style={styles.container}>

      <Modal
        transparent={true}
        animationType="slide"
        visible={wallet.visibleWalletModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Số tiền cần nạp</Text>
            <TextInput onChangeText={getMoney} style = {styles.input}/>
            <View style = {styles.btnContainer}>
                <TouchableOpacity onPress={HandleTopUp}>
                <View style = {[styles.btnTopup, styles.btn]}>
                    <Text style = {styles.textBtn}>Nạp tiền</Text>
                </View>
                </TouchableOpacity>
               
                <TouchableOpacity onPress={cancle}>
                <View style = {[styles.btnCancle, styles.btn]}>
                    <Text style = {styles.textBtn}>Hủy</Text>
                </View>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    height: 200,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: { 
    borderRadius: 20,
    padding: 10,
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderColor: "#ffc266"
  },
  btnContainer: { 
    width: 200,
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  btn: { 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: 80,
    height: 40,
  },
  textBtn: { 
    fontSize: 20,
    color: "#fff"
  },
  btnTopup: { 
    backgroundColor: "#ffb84d"
  },
  btnCancle: {
    backgroundColor: "#ff5c33"
  }
});
