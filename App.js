import React, { useState } from 'react'; 
import { 
	View, 
	Text, 
	TextInput, 
	Button, 
	StyleSheet, 
	Modal, 
	TouchableOpacity, 
	FlatList, 
	ScrollView, 
} from 'react-native'; 
import numberToWords from 'number-to-words'; 
import { styles } from "./styles"; 


export default function Numberformat() { 
	let [inputFormat, setInputFormat] = useState('decimal'); 
	let [inputNumber, setInputNumber] = useState(''); 
	let [decimal, setDecimal] = useState(''); 
	let [binary, setBinary] = useState(''); 
	let [octal, setOctal] = useState(''); 
	let [hexadecimal, setHexadecimal] = useState(''); 
	let [rounddigit, setRoundDigit] = useState(''); 
	let [rounddigitindex, setRoundDigitindex] = useState('2'); 
	let [significantno, setSignificantno] = useState(''); 
	let [significantnoindex, setSignificantnoindex] = useState('2'); 
	let [integer, setInteger] = useState(''); 
	let [numerator, setNumerator] = useState('0'); 
	let [denominator, setDenominator] = useState('0'); 
	let [inword, setInword] = useState(''); 
	let [modalVisible, setModalVisible] = useState(false); 
	let [options] = useState([ 
		{ label: 'Binary', value: 'binary' }, 
		{ label: 'Decimal', value: 'decimal' }, 
		{ label: 'Octal', value: 'octal' }, 
		{ label: 'Hexadecimal', value: 'hexadecimal' }, 
	]); 

	// Conversion functions object 
	const conversionFunctions = { 
		binary: (input) => parseInt(input, 2), 
		octal: (input) => parseInt(input, 8), 
		hexadecimal: (input) => parseInt(input, 16), 
		decimal: (input) => parseInt(input, 10), 
	}; 

	const handleConversion = () => { 
		const decimalValue = 
			conversionFunctions[inputFormat](inputNumber); 

		setDecimal(decimalValue); 
		setInteger(Math.floor(decimalValue).toString()); 
		setBinary(Math.floor(decimalValue).toString(2)); 
		setOctal(Math.floor(decimalValue).toString(8)); 
		setHexadecimal(Math.floor(decimalValue) 
			.toString(16).toUpperCase()); 

		if (decimalValue <= 1000000000000000) { 
			setInword(numberToWords.toWords(decimalValue)); 
		} else { 
			setInword("Over Limit (Max-Limit: 1000000000000000)"); 
		} 

		setRoundDigit(roundToKthInteger( 
			parseFloat(decimalValue, 10), 
			parseInt(rounddigitindex, 10)) 
		); 

		if (inputFormat === 'decimal' && 
			parseFloat(decimal, 10) - decimalValue !== 0) { 
			const result = floatToFraction( 
				parseFloat(decimal, 10) - decimalValue); 
			setNumerator(result.numerator.toString()); 
			setDenominator(result.denominator.toString()); 
		} else { 
			setNumerator('0'); 
			setDenominator('0'); 
		} 

		if (inputFormat === 'decimal') { 
			setSignificantno(roundToSignificantDigits( 
				parseFloat(decimal, 10), 
				parseInt(significantnoindex, 10) 
			)); 
		} else { 
			setSignificantno(roundToSignificantDigits( 
				parseFloat(decimalValue, 10), 
				parseInt(significantnoindex, 10) 
			)); 
		} 
	}; 

	function floatToFraction(number) { 
		const tolerance = 0.000001; 
		let numeratorvalue = 1; 
		let denominatorvalue = 1; 
		let error = number - numeratorvalue / denominatorvalue; 

		while (Math.abs(error) > tolerance) { 
			if (error > 0) numeratorvalue++; 
			else denominatorvalue++; 
			error = number - numeratorvalue / denominatorvalue; 
		} 
		return { 
			numerator: numeratorvalue, 
			denominator: denominatorvalue 
		}; 
	} 

	function roundToKthInteger(number, k) { 
		const multiplier = Math.pow(10, k); 
		return Math.round(number * multiplier) / multiplier; 
	} 

	function roundToSignificantDigits(number, significantDigits) { 
		if (significantDigits <= 0) return 0; 
		const multiplier = Math.pow(10, 
			significantDigits - Math.floor 
			(Math.log10(Math.abs(number))) - 1); 
		const roundedNumber = 
			(Math.round(number * multiplier) / multiplier); 
		return roundedNumber; 
	} 

	const renderOptionItem = ({ item }) => ( 
		<TouchableOpacity 
			style={styles.optionItem} 
			onPress={() => { 
				setInputFormat(item.value); 
				setModalVisible(false); 
			}} 
		> 
			<Text style={styles.optionText}>{item.label}</Text> 
		</TouchableOpacity> 
	); 

	return ( 
		<ScrollView> 
			<View style={styles.container}> 
				<Text style={styles.header}> 
					Number Format Converter 
				</Text> 
				<TouchableOpacity 
					style={styles.dropdownButton} 
					onPress={() => setModalVisible(true)} 
				> 
					<Text>{inputFormat}</Text> 
				</TouchableOpacity> 
				<View style={styles.section}> 
					<Text style={styles.label}> 
						Enter {inputFormat} Number 
					</Text> 
					<View style={styles.inputContainer}> 
						<TextInput 
							style={styles.input} 
							keyboardType={ 
								(inputFormat !== 'decimal') ? "default" : "numeric"
							} 
							value={inputNumber} 
							onChangeText={(text) => { 
								if (inputFormat === 'decimal') { 
									setDecimal(text); 
									setInputNumber(text); 
								} else { 
									setInputNumber(text); 
								} 
							}} 
						/> 
						<TouchableOpacity 
							style={styles.btn} 
							onPress={handleConversion} 
						> 
							<Text style={styles.btnText}>Convert</Text> 
						</TouchableOpacity> 
					</View> 
				</View> 
				{/* Display the conversion results here */} 
				<View style={styles.resultSection}> 
					<Text style={styles.resultHeader}> 
						Integer Number 
					</Text> 
					<Text style={styles.resultText}>{integer}</Text> 
				</View> 
				<View style={styles.resultSection}> 
					<Text style={styles.resultHeader}> 
						Binary Format (Base-2) of Integer {integer} 
					</Text> 
					<Text style={styles.resultText}>{binary}</Text> 
				</View> 
				<View style={styles.resultSection}> 
					<Text style={styles.resultHeader}> 
						Octal Format (Base-8) of Integer {integer} 
					</Text> 
					<Text style={styles.resultText}>{octal}</Text> 
				</View> 
				<View style={styles.resultSection}> 
					<Text style={styles.resultHeader}> 
						Hexadecimal Format (Base-16) of Integer {integer} 
					</Text> 
					<Text style={styles.resultText}>{hexadecimal}</Text> 
				</View> 
				<View style={styles.resultSection}> 
					<Text style={styles.resultHeader}> 
						In Words of Integer {integer} 
					</Text> 
					<Text style={styles.resultText}>{inword}</Text> 
				</View> 
				<View style={styles.resultSection}> 
					<Text style={styles.resultHeader}>Rounded Number</Text> 
					<Text style={styles.resultText}>{rounddigit}</Text> 
				</View> 
				<View style={styles.resultSection}> 
					<Text style={styles.resultHeader}>Significant Number</Text> 
					<Text style={styles.resultText}>{significantno}</Text> 
				</View> 

				{/* Modal for Options */} 
				<Modal 
					animationType="slide"
					transparent={true} 
					visible={modalVisible} 
					onRequestClose={() => setModalVisible(false)} 
				> 
					<View style={styles.modalContainer}> 
						<View style={styles.modalContent}> 
							<FlatList 
								data={options} 
								renderItem={renderOptionItem} 
								keyExtractor={(item) => item.value} 
							/> 
						</View> 
					</View> 
				</Modal> 
			</View> 
		</ScrollView> 
	); 
}
