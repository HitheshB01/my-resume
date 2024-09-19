// ResumeDocument.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 32,
  },
  section: {
    marginBottom: 24,
    padding: 8,
  },
  header: {
    marginBottom: 24,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  subtitle: {
    fontSize: 14,
    color: '#4B5563',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E3A8A',
    borderBottom: '2px solid #BFDBFE',
    paddingBottom: 4,
    marginBottom: 8,
  },
  listItem: {
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    color: '#3B82F6',
  },
});

const ResumeDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Hithesh B</Text>
        <Text style={styles.subtitle}>hitesh99017@gmail.com | 9901767545</Text>
        <Text style={styles.subtitle}>
          <Link style={styles.link} src="https://linkedin.com/in/hithesh-b-149b68229">
            LinkedIn Profile
          </Link> |{' '}
          <Link style={styles.link} src="https://github.com/hitheshb01">
            GitHub Profile
          </Link>
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Objective</Text>
        <Text>A highly motivated and enthusiastic fresher seeking a technical role in a dynamic organization where I can apply my skills and contribute to the company's success while growing professionally.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <Text style={styles.bold}>• Java</Text>
        <Text style={styles.bold}>• JavaScript</Text>
        <Text style={styles.bold}>• HTML</Text>
        <Text style={styles.bold}>• CSS</Text>
        <Text style={styles.bold}>• React</Text>
        <Text style={styles.bold}>• Tailwind CSS</Text>
        <Text style={styles.bold}>• Firebase</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Roles</Text>
        <Text style={styles.listItem}>Event coordinator for HackHustler at Seshadripuram First Grade College</Text>
        <Text style={styles.listItem}>Event coordinator for Techtrickie at Kristu Jayanti College</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hobbies</Text>
        <Text style={styles.listItem}>Chess</Text>
        <Text style={styles.listItem}>Carrom</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.bold}>BMS Institute Of Technology</Text>
        <Text>Masters of Computer Application | 8.38 CGPA | 2024</Text>
        <Text style={styles.bold}>Seshadripuram First Grade College</Text>
        <Text>Bachelor of Computer Application | 8.5 CGPA | Sep 2021</Text>
        <Text style={styles.bold}>SET Pu College</Text>
        <Text>CLASS 12 | 77.16% | March 2018</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <Text style={styles.bold}>Resume Builder Application</Text>
        <Text>Developed using React.js, Tailwind CSS, and Firebase.</Text>
        <Text style={styles.bold}>Job Portal Application</Text>
        <Text>Designed with React.js, Tailwind CSS, and Firebase.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <Text style={styles.listItem}>2nd Place at CodeXpress competition at Instellation, organized by DSATM – 2024.</Text>
        <Text style={styles.listItem}>1st Place at CrackTheCode Competition at TechTransforn, organized by BMSIT – 2024.</Text>
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;












// // ResumeDocument.js
// import React from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     padding: 30,
//     backgroundColor: '#fff',
//   },
//   section: {
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   subheader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   text: {
//     fontSize: 12,
//     marginBottom: 5,
//   },
//   listItem: {
//     fontSize: 12,
//     marginBottom: 5,
//   },
// });

// const ResumeDocument = () => (
//   <Document>
//     <Page style={styles.page}>
//       <View style={styles.section}>
//         <Text style={styles.header}>[Your Name]</Text>
//         <Text style={styles.text}>[Your Email] | [Your Phone Number]</Text>
//         <Text style={styles.text}>[Your LinkedIn Profile] | [Your GitHub Profile]</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheader}>Objective</Text>
//         <Text style={styles.text}>A highly motivated and enthusiastic fresher seeking a technical role in a dynamic organization where I can apply my skills and contribute to the company's success while growing professionally.</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheader}>Technical Skills</Text>
//         <Text style={styles.listItem}>• Java</Text>
//         <Text style={styles.listItem}>• JavaScript</Text>
//         <Text style={styles.listItem}>• HTML</Text>
//         <Text style={styles.listItem}>• CSS</Text>
//         <Text style={styles.listItem}>• React</Text>
//         <Text style={styles.listItem}>• Tailwind CSS</Text>
//         <Text style={styles.listItem}>• Firebase</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheader}>Education</Text>
//         <Text style={styles.text}>BMS Institute Of Technology | Masters of Computer Application | 8.38 CGPA | 2024</Text>
//         <Text style={styles.text}>Seshadripuram First Grade College | Bachelor of Computer Application | 8.5 CGPA | Sep 2021</Text>
//         <Text style={styles.text}>SET Pu College | CLASS 12 | 77.16% | March 2018</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheader}>Projects</Text>
//         <Text style={styles.text}>• Resume Builder Application: Developed using React.js, Tailwind CSS, and Firebase.</Text>
//         <Text style={styles.text}>• Job Portal Application: Designed with React.js, Tailwind CSS, and Firebase.</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheader}>Achievements</Text>
//         <Text style={styles.text}>• 2nd Place at CodeXpress competition at Instellation, organized by DSATM – 2024.</Text>
//         <Text style={styles.text}>• 1st Place at CrackTheCode Competition at TechTransforn, organized by BMSIT – 2024.</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheader}>Roles</Text>
//         <Text style={styles.text}>• Event coordinator for HackHustler at Seshadripuram First Grade College</Text>
//         <Text style={styles.text}>• Event coordinator for Techtrickie at Kristu Jayanti College</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subheader}>Hobbies</Text>
//         <Text style={styles.listItem}>• Chess</Text>
//         <Text style={styles.listItem}>• Carrom</Text>
//       </View>
//     </Page>
//   </Document>
// );

// export default ResumeDocument;
