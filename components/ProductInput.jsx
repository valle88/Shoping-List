import { useState } from 'react';
import NumericInput from 'react-native-numeric-input'
import { Button, StyleSheet, TextInput, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

const ProductInput = ({ onProductAdd }) => {
    const [productName, setProductName] = useState('');
    const [quantity,setQuantity]= useState(1);
    const [prodType, setProdType]= useState('Category...');

    const prodTypes = ['fruit', 'vegetable', 'bakery', 'fish', 'meat'];

    const changeTextHandler = (value) => {
        setProductName(value);
        
    }
    const changeTypeHandler = (value) =>{
        setProdType(value);
    }

    const changeQuantityHandler = (value)=>{
        setQuantity(value);
    }

    const addProductHandler = () => {
        productName.length > 15
            ?alert('te has escedido de caracteres')
            : onProductAdd(productName, prodType,quantity);
        
        setProductName('');
        setQuantity(1);
        setProdType('Category...');
    }

    const isDisabled = ()=>{
        const sanitizedName = productName.trim();

        if(sanitizedName !== '' && prodType !== 'Category...' ){
            return false;
        }
        return true;
    };


    return (
        <View  >
            <View style={styles.productInput}>
            <TextInput 
                placeholder='Introduzca un producto'
                keyboardType="default"
                onChangeText={changeTextHandler}
                value={productName} />
            <NumericInput 
                        type='plus-minus'
                        valueType='integer'
                        initValue={quantity}
                        minValue={1}
                        maxValue={99}
                        onChange={value => changeQuantityHandler(value)}
                        editable={false}
                    />

            </View>
            <View style={styles.productInput}>
                
            <SelectDropdown
                        data={prodTypes}
                        onSelect={(selectedItem) => {
                            changeTypeHandler(selectedItem);
                        }}
                        defaultButtonText={'Category...'}
                        buttonTextAfterSelection={() => {
                            return prodType;
                        }}
                        rowTextForSelection={(item) => {
                            return item;
                        }}
                        buttonStyle={styles.dropdownBtnStyle}
                        buttonTextStyle={styles.dropdownBtnTxtStyle}
                        dropdownStyle={styles.dropdownDropdownStyle}
                        rowStyle={styles.dropdownRowStyle}/>

                    <Button
                        style={styles.addButton}
                        title="Add"
                        onPress={addProductHandler}
                        disabled={isDisabled()}
                    />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#defabb',
        width: '96%',
        height: 80,
        padding: 10,
        color: 'black',
        borderColor: 'white'
        
    },
 
    
    productName: {
        flex: 1,
        color: 'white',
        
    },
    numberInput: {
        alignItems: 'center',
        height: 50
    },
    dropdownBtnStyle: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdownBtnTxtStyle: {
        color: '#444', 
        textAlign: 'left'
    },
    dropdownDropdownStyle: {
        backgroundColor: '#EFEFEF'
    },
    dropdownRowStyle: {
        backgroundColor: '#EFEFEF', 
        borderBottomColor: '#C5C5C5'
    },
    dropdownRowTxtStyle: {
        color: '#444',
        textAlign: 'left'
    },
    addButton:{
        backgroundColor: '#737373',
        height: 10,
        width: 20,
        borderBottomColor: 'green'
    }
    
});

export default ProductInput;