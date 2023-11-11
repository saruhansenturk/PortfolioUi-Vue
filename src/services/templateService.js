function imageTemplate(base64Str) {}

function pdfTemplate(base64Str) {
    return `<iframe class="v-responsive__content" min-width="600" width="1000" height="500" src="data:application/pdf;base64,${base64Str}"></iframe>`;
}

export default {
    pdfTemplate,
    imageTemplate,
};
