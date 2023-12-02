export interface TextWithBtnInputProps {
    titleText: string;
    placeholder: string;
    isError: boolean;
    errorText: string;
    btnText: string;

    btnFunc(): Promise<void>;
    style?: {
        marginTop?: string;
    }
}