import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QRCode from 'react-native-qrcode'
import client, { Avatar, TitleBar } from '@doubledutch/rn-client'

console.disableYellowBox = true
export default class HomeView extends PureComponent {
  render() {
    return (
      <View>
        <TitleBar title="My Badge" client={client} />
        <View style={s.container}>
          <QRCode style={s.qrcode}
            value={client.currentUser.identifier}
            size={256}
            bgColor='black'
            fgColor='white' />
          <Text style={s.eventName}>{client.currentEvent.name}</Text>
          <View style={s.nameRow}>
            <Avatar client={client} user={client.currentUser} size={25} />
            <Text style={s.name}>{client.currentUser.firstName} {client.currentUser.lastName}</Text>
          </View>
          <Text style={s.identifier}>{client.currentUser.identifier}</Text>
        </View>
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10
  },
  eventName: {
    marginTop: 10
  },
  nameRow: {
    flexDirection: 'row',
    marginTop: 5
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 7
  },
  identifier: {
    marginTop: 15
  }
})
