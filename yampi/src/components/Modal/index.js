import React, { useState } from 'react';
import { Image, Modal, TouchableOpacity, TouchableWithoutFeedback, Text, View } from 'react-native';
import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';


export const CustomModal = props => {
    return <Modal
        animationType="fade"
        transparent={true}
        visible={props.isVisible}>
        <TouchableWithoutFeedback style={styles.container} onPress={() => { props.setHidden(false) }}>
            <View style={styles.box}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.content}>
                        {props.children}
                    </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    </Modal >
}

CustomModal.defaultProps = {
    modalStyle: '',
    borderLess: false,
    isLoading: false
}

