import { Image,Pressable, StyleSheet, Text, View } from 'react-native';

const ListItem = ({productId, productName, quantity, productType, isBought, onProductRemove, onBought }) => {

    const handleImage = (type) => {
        let img;

        switch (type){

            case 'fruit':
                img = require('../assets/3082025.png');
                break;

            case 'fish':
                img = require('../assets/fish.png');
                break;

            case 'meat':
                img = require('../assets/carne.png');
                break;

            case 'bakery':
                img = require('../assets/bakery.png');
                break;

            case 'vegetable':
                img = require('../assets/vegetable.png');
                break;   
                
            default:
                img = require('../assets/3082025.png');
                break;
        }

        return img;
    }

    const handleBoughtTextStyle = () => {

        if (isBought) {
            return styles.productBought;
        }

        return styles.productInfo;
    };

    const handleBoughtListStyle = () => {

        if (isBought) {
            return styles.listItemBought
        }

        return styles.listItem;
    };

  return (
        <View style={handleBoughtListStyle()}>
            <Pressable style={{flexDirection: 'row'}} onPress={() => onProductRemove(productId)}>
                <Image style={styles.productImage} source={handleImage(productType)} />
            </Pressable>
            <Pressable style={{flexDirection: 'row'}} onPress={() => onBought(productId, isBought)}>
                <Text style={handleBoughtTextStyle()}>{productName}</Text>
            </Pressable>
            <Pressable style={{flexDirection: 'row'}} onPress={() => onBought(productId, isBought)}>
                <Text style={handleBoughtTextStyle()}>X{quantity}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        width: '90%',
        marginBottom: 5,
        paddingHorizontal: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000'
    },
    listItemBought : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       
        borderRadius: 5,
        width: '80%',
        marginBottom: 5,
        paddingHorizontal: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000'
    },
    productImage: {
        width: 50,
        height: 50
    },
    productInfo: {
        fontSize: 20,
        textAlign: 'center',
        alignContent: 'center'
    },
    productBought: {
        fontSize: 18,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        textAlign: 'center',
        alignContent: 'center'
    }
});

export default ListItem;