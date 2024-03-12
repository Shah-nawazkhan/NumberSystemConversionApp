import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		padding: 20, 
		alignItems: 'center', 
		backgroundColor: '#f7f7f7', 
	}, 
	header: { 
		fontSize: 24, 
		marginBottom: 20, 
		textAlign: "center", 
		color: "green", 
		fontWeight: "bold", 
		margin: 20, 
	}, 
	dropdownButton: { 
		borderWidth: 1, 
		borderColor: '#ced4da', 
		borderRadius: 4, 
		padding: 8, 
		width: '100%', 
		marginBottom: 20, 
		alignItems: 'center', 
		backgroundColor: '#fff', 
	}, 
	section: { 
		backgroundColor: '#fff', 
		borderWidth: 1, 
		borderRadius: 7, 
		width: '100%', 
		maxWidth: 500, 
		padding: 20, 
		marginBottom: 20, 
	}, 
	inputContainer: { 
		flexDirection: 'row', 
		alignItems: 'center', 
	}, 
	input: { 
		flex: 1, 
		fontSize: 16, 
		padding: 8, 
		borderWidth: 1, 
		borderColor: '#ced4da', 
		borderRadius: 4, 
		marginRight: 5, 
		backgroundColor: '#fff', 
	}, 
	label: { 
		fontSize: 15, 
		color: '#000', 
		fontWeight: "bold", 
	}, 
	btn: { 
		fontSize: 16, 
		padding: 8, 
		borderRadius: 10, 
		backgroundColor: '#28a745', 
		marginLeft: 5, 
		shadowOffset: { width: 0, height: 6 }, 
		shadowColor: 'grey', 
		shadowOpacity: 0.5, 
		shadowRadius: 15, 
	}, 
	btnText: { 
		fontSize: 16, 
		padding: 8, 
		color: '#fff', 
		fontWeight: "bold", 
	}, 
	resultSection: { 
		marginBottom: 20, 
		backgroundColor: '#fff', 
		borderWidth: 1, 
		borderRadius: 7, 
		padding: 20, 
		width: '100%', 
		maxWidth: 500, 
		shadowOffset: { width: -2, height: 4 }, 
		shadowColor: 'grey', 
		shadowOpacity: 1, 
		shadowRadius: 13, 
	}, 
	resultHeader: { 
		fontSize: 18, 
		marginBottom: 10, 
	}, 
	resultText: { 
		fontSize: 19, 
		color: "red", 
		fontWeight: "bold", 
	}, 
	modalContainer: { 
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: 'rgba(0, 0, 0, 0.5)', 
	}, 
	modalContent: { 
		backgroundColor: 'white', 
		borderRadius: 10, 
		padding: 20, 
		width: '80%', 
		maxHeight: '80%', 
	}, 
	optionItem: { 
		padding: 10, 
		borderBottomWidth: 1, 
		borderBottomColor: '#ced4da', 
	}, 
	optionText: { 
		fontSize: 16, 
	}, 

}); 

export { styles }
