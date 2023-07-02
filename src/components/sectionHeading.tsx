type Props = {
	title: string;
	small?: boolean;
};

const SectionHeading = ({ title, small = false }: Props) => {
	return (
		<h2 className={`rt-section-heading ${small ? "style-2" : ""}`}>
			<span className="rt-section-text">{title}</span>
			<span className="rt-section-dot"></span>
			<span className="rt-section-line"></span>
		</h2>
	);
};

export default SectionHeading;
