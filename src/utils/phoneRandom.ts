let lastIndex: number | null = null;

export default function phoneRandom(): string {
    const phones: string[] = ["5511914990605", "5511961399425"];

    let index = Math.floor(Math.random() * phones.length);

    if (index === lastIndex) {
        index = (index + 1) % phones.length;
    }

    lastIndex = index;
    return phones[index];
}