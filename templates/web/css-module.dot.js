/**
 * {{=data.name}} Styles
 *
 * @author {{=data.author.fullName}}
 * @created {{=data.date.toISOString().split('T')[0]}}
 */

.container {
	display: flex;
	flex-direction: column;
	padding: 1rem;
}

.header {
	margin-bottom: 1rem;
}

.title {
	font-size: 1.5rem;
	font-weight: bold;
	color: #333;
}

.content {
	flex: 1;
}

.footer {
	margin-top: 1rem;
	font-size: 0.8rem;
	color: #666;
}

/* Media queries */
@media (max-width: 768px) {
	.container {
	padding: 0.5rem;
	}

	.title {
	font-size: 1.2rem;
	}
}
