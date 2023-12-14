export interface PasswordInputProps {
    isError: boolean;
    errorText: string;
    titleText: string;
    onChange(value:string):void
    style?: {
        marginTop?: string;
    }
}