export default function phoneRandom(): string {
    const phones: Array<string> = ["5511961399425", "5511914990605"];

    const min: number = 0;
    const max: number = 2;

    const index: number = Math.floor(Math.random() * (max - min) + min);

    return phones[index];
}