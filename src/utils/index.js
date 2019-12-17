export const decodeBLOB = data => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.addEventListener('loadend', (e) => {
            const text = e.srcElement.result;
            if (text.indexOf('<svg') > -1) {
                resolve(new Blob([text], { type: 'image/svg+xml' }));
            } else {
                resolve(data);
            }
        });

        reader.readAsText(data);
    })
};

export const convertDate = dateString => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const date = new Date(dateString);

    return `${monthNames[new Date(date).getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export const clRound = (x, pow = 1) => Math.round(x * Math.pow(10, pow)) / Math.pow(10, pow);

export const classList = ([...args]) => args.filter(i => i.trim()).join(' ');