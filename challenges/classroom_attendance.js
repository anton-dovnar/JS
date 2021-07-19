const getStudents = (classroom) => {
    const {hasTeachingAssistant, classList} = classroom;
    let teacher, teachingAssistant, students;

    if (hasTeachingAssistant) {
        [teacher, teachingAssistant, ...students] = classList;
    } else {
        [teacher, ...students] = classList;
    }

    return students;
};

console.log(
    getStudents({
        hashTeachingAssistant: true,
        classList: ['Rashida', 'John', 'Roman', 'Lisa', 'Omar'],
    }),
);
