export interface TextInputProps {
    titleText: string;
    placeholder: string;
    isError: boolean;
    errorText: string;
    onChange(value:string):void;
    style?: {
        marginTop?: string;
    }
}