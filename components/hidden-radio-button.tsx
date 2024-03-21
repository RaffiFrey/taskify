import {useEffect, useState} from "react";

interface RadioButtonProps {
    id: string;
    pending: boolean;
    image: Record<string, any>;
    selectedImageId: string | null;
}

export const HiddenRadioButton = ({ id, pending, image, selectedImageId }: RadioButtonProps) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(selectedImageId === image.id);
    }, [selectedImageId, image.id]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    }

    return (
        <input
            type={"radio"}
            id={id}
            name={id}
            className={"hidden"}
            checked={isChecked}
            onChange={handleChange}
            disabled={pending}
            value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
        />
    );
}