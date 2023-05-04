import React from 'react';
import { Document, Page, Text, View, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#ff0000',
      padding: '10px',
    },

  });
const MyDocument = () => (
    <Document>
        <Page>
            <View>
                <Text style={styles.text}>You will learn advanced Reacr Here. </Text>
            </View>

            <View>Difference between nodejs and express js.</View>
        </Page>
    </Document>
);

const Blogs = () => {

    const [pdfGenerated, setPdfGenerated] = React.useState(false);

    const handleGeneratePdf = () => {
        setPdfGenerated(true);
    };


    return (
        <div className='my-container mt-10'>
            <button onClick={handleGeneratePdf} className='btn mb-4 mr-3 mx-auto'>Generate PDF</button>
            {pdfGenerated && (
                <PDFDownloadLink document={<MyDocument />} fileName="my-document.pdf">
                    Download PDF
                </PDFDownloadLink>
            )}
            <div className='border-2 border-orange-500 shadow-md mb-7'>
                <div className='p-4'>
                    <h1 className='text-lg font-bold mb-2'>Controlled and Uncontrolled components</h1>
                    <p className='mb-1'><span className='font-bold'>Controlled Components : </span> when we let react control the component for us. It means that the component controls the input form, and all of its changes are completely driven by event handlers like setState(). Also, the component controls the render and keeps the data of form in the component state.</p>
                    <p className='mb-1'><span className='font-bold'>Uncontrolled Components : </span> uncontrolled component react does not use state. Thus uncontrolled components do not depend on any state of input elements or any event handler. This type of component does not care about real-time input changes.</p>
                </div>
            </div>

            <div className='border-2 border-orange-500 shadow-md mb-7'>
                <div className='p-4'>
                    <h1 className='text-lg font-bold mb-2'>How to validate React props using PropTypes ?</h1>
                    <p className='mb-1'><span className='font-bold'>PropTypes many validation functions : </span> PropTypes.any PropTypes.bool PropTypes.number PropTypes.string PropTypes.func PropTypes.array PropTypes.object PropTypes.symbol</p>

                </div>
            </div>

            <div className='border-2 border-orange-500 shadow-md mb-7'>
                <div className='p-4'>
                    <h1 className='text-lg font-bold mb-2'>Difference between nodejs and express js.</h1>
                    <p className='mb-1'><span className='font-bold'>Node js : </span> is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.</p>
                    <p className='mb-1'><span className='font-bold'>Express js : </span> is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.</p>
                </div>
            </div>


            <div className='border-2 border-orange-500 shadow-md mb-7'>
                <div className='p-4'>
                    <h1 className='text-lg font-bold mb-2'>What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='mb-1'>A custom Hook is a  function whose name starts with use and that may call other Hooks. The reason to create a custom hook is for code reusability. example, instead of writing the same code in multiple components that use the same common stateful logic, you can set that code inside a custom hook and reuse it</p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;