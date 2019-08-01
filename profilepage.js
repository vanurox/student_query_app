import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './app-style';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Footer, FooterTab, Badge, Left, Right, Body } from 'native-base';
import { SearchBar } from 'react-native-elements';
import Svg, { Circle, Rect, Ellipse } from 'react-native-svg';

export default class ProfilePage extends Component {


    render() {
        return (


            <View style={styles.container}>
                
                <View style={styles.semiCricle_Container}>
                    <View style={styles.semiCricle_Wrapper}>
                        <View style={styles.semiCricle_Shape}>
                            <View style={styles.profile_container}>
                                <View style={styles.pimage}>
                                    <Image style={styles.pimage}
                                        source={require('./images/pimage.jpg')}
                                    />
                                </View>

                                <View>
                                    <Text style={styles.pro_name}>Darrell Schmeler</Text>
                                    <Text note numberOfLines={1} style={{ color: '#fff', alignSelf: 'center' }}>schmeler@gmail.com</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1,top:10 }}>
                            <Content>
                                <Card >
                                    <CardItem>
                                        <Left>
                                            <Thumbnail style={{ backgroundColor: '#90a4ae' }} source={{ uri: 'Image URL' }} />
                                            <Body>
                                                <Text style={{ fontSize: 16, fontWeight: '500' }}>Darrell Schmeler</Text>
                                                <Text note style={{ fontSize: 12 }}>1 min</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Image source={require('./images/pimage.jpg')} style={{ flex: 1 }} />
                                            <Text style={{ alignSelf: 'center', margin: 6 }}>
                                                This is just a transparent card with some text to boot.This is just a transparent card with some text to boot.This is just a transparent card with some text to boot.This is just a transparent card with some text to boot.
                                            </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem footer bordered style={styles.lcs_buttons}>
                                        <TouchableOpacity transparent>
                                            <Icon active name="md-thumbs-up" style={{ fontSize: 18, textAlign: 'center' }} />
                                            <Text style={{ color: '#616161', fontSize: 12, }}>12 Likes</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity transparent>
                                            <Icon active name="md-chatbubbles" style={{ fontSize: 18, textAlign: 'center' }} />
                                            <Text style={{ color: '#616161', fontSize: 12, }}>4 Comments</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity transparent>
                                            <Icon active name="md-share-alt" style={{ fontSize: 18, textAlign: 'center' }} />
                                            <Text style={{ color: '#616161', fontSize: 12 }}>8 share</Text>
                                        </TouchableOpacity>
                                    </CardItem>
                                </Card>

                                <Card >
                                    <CardItem>
                                        <Left>
                                            <Thumbnail style={{ backgroundColor: '#90a4ae' }} source={{ uri: 'Image URL' }} />
                                            <Body>
                                                <Text style={{ fontSize: 16, fontWeight: '500' }}>Darrell Schmeler</Text>
                                                <Text note style={{ fontSize: 12 }}>1 min</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Image source={require('./images/pimage.jpg')} style={{ flex: 1 }} />
                                            <Text style={{ alignSelf: 'center', margin: 6 }}>
                                                This is just a transparent card with some text to boot.This is just a transparent card with some text to boot.This is just a transparent card with some text to boot.This is just a transparent card with some text to boot.
                                            </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem footer bordered style={styles.lcs_buttons}>
                                        <TouchableOpacity transparent>
                                            <Icon active name="md-thumbs-up" style={{ fontSize: 18, textAlign: 'center' }} />
                                            <Text style={{ color: '#616161', fontSize: 12, }}>12 Likes</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity transparent>
                                            <Icon active name="md-chatbubbles" style={{ fontSize: 18, textAlign: 'center' }} />
                                            <Text style={{ color: '#616161', fontSize: 12, }}>4 Comments</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity transparent>
                                            <Icon active name="md-share-alt" style={{ fontSize: 18, textAlign: 'center' }} />
                                            <Text style={{ color: '#616161', fontSize: 12 }}>8 share</Text>
                                        </TouchableOpacity>
                                    </CardItem>
                                </Card>
                            </Content>

                        </View>
            </View>
        );
    }
}

