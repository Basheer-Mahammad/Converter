document.getElementById('submitBtn').addEventListener('click', function () {
    const inputType = document.getElementById('inputType').value;
    const outputType = document.getElementById('outputType').value;
    const totalMarks = parseFloat(document.getElementById('totalMarks').value);
    const totalCGPA = parseFloat(document.getElementById('totalCGPA').value);
    const totalPercentage = parseFloat(document.getElementById('totalPercentage').value);

    let inputValue, result;

    if (inputType === 'marks') {
        inputValue = parseFloat(document.getElementById('marks').value);
        if (outputType === 'cgpa') {
            result = (inputValue / totalMarks) * totalCGPA;
            document.getElementById('cgpa').value = result.toFixed(2);
        } else if (outputType === 'percentage') {
            result = (inputValue / totalMarks) * totalPercentage;
            document.getElementById('percentage').value = result.toFixed(2);
        }
    } else if (inputType === 'cgpa') {
        inputValue = parseFloat(document.getElementById('cgpa').value);
        if (outputType === 'marks') {
            result = (inputValue / totalCGPA) * totalMarks;
            document.getElementById('marks').value = result.toFixed(2);
        } else if (outputType === 'percentage') {
            result = (inputValue / totalCGPA) * totalPercentage;
            document.getElementById('percentage').value = result.toFixed(2);
        }
    } else if (inputType === 'percentage') {
        inputValue = parseFloat(document.getElementById('percentage').value);
        if (outputType === 'marks') {
            result = (inputValue / totalPercentage) * totalMarks;
            document.getElementById('marks').value = result.toFixed(2);
        } else if (outputType === 'cgpa') {
            result = (inputValue / totalPercentage) * totalCGPA;
            document.getElementById('cgpa').value = result.toFixed(2);
        }
    }
});

document.getElementById('resetBtn').addEventListener('click', function () {
    document.getElementById('inputType').value = 'marks';
    document.getElementById('outputType').value = 'marks';
    document.getElementById('totalMarks').value = '';
    document.getElementById('totalCGPA').value = '';
    document.getElementById('totalPercentage').value = '';
    document.getElementById('marks').value = '';
    document.getElementById('cgpa').value = '';
    document.getElementById('percentage').value = '';
});
